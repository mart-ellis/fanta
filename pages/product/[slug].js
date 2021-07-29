import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
    show: {
        transition: {
            staggerChildren: 0.25
        }
    }
}

const item = {
    hidden: {
        opacity: 0, 
        y: 200
    },
    show: {
        opacity: 1, 
        y: 0,
        transition: {
            ease: easing,
            duration: 1.6
        }
    },
    exit: {
        opacity: 0,
        y: -150, 
        transition: {
            ease: 'easeOut',
            duration: 0.8
        }
    }
}

const ProductPage = ({ product }) => {
    const { flavour, description, image, color, ingredients, slug } = product;
    const { API_URL } = process.env;

    return (
        <div className="w-screen h-screen grid grid-rows-5 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 dark:bg-custom-dark-gray">
            <div className="row-span-3 lg:col-span-1 flex items-center pt-8 justify-center relative">
                <motion.div layoutId={product.id} className="rounded-sm w-full h-full absolute left-0 top-0 transform" style={{ backgroundColor: color}}>
                </motion.div> 
                <motion.div layoutId={flavour} className="w-32 xs:w-40 sm:w-44 xl:w-52 ">
                    <Image src={`/product-images/${slug}.png`} width={200} height={380} quality={90} layout="responsive"></Image>
                </motion.div>
            </div>
            <div className="row-span-2 lg:col-span-1 flex justify-center items-center text-custom-dark-gray dark:text-custom-white dark:bg-custom-dark-gray">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="w-5/6 md:w-3/5 lg:w-4/5 xl:w-7/8 2xl:w-3/5"
                >
                    <motion.div variants={item} className="flex justify-between items-baseline mb-6 lg:mb-8">
                        <h1 className="font-lora text-3xl sm:text-4xl lg:text-5xl">{flavour}</h1>
                        <p className="text-xs">330ml / 375ml / 500ml</p>
                    </motion.div>
                    <motion.h2 variants={item} className="font-semibold text-sm sm:text-md lg:text-lg leading-tight mb-6">{description}</motion.h2>
                    <motion.h3 variants={item} className="font-normal text-xs text-gray-600 dark:text-gray-400">{ingredients}</motion.h3>
                    <motion.div variants={item} className="mt-8 lg:mt-6">
                        <motion.button 
                            className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-md shadow-lg text-custom-white"
                            style={ {backgroundColor: color, filter: 'brightness(90%)'}}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <p className="text-xs mr-2">Add to Basket</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h4V8a6 6 0 0 1 6-6zm1 11h-2v4h2v-4zm-4 0H7v4h2v-4zm8 0h-2v4h2v-4zm-5-9a4 4 0 0 0-3.995 3.8L8 8v1h8V8a4 4 0 0 0-3.8-3.995L12 4z" fill="rgba(255,255,255,1)"/></svg>
                        </motion.button>
                        <motion.button className="ml-6 bg-custom-dark-gray inline-flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-md shadow-lg text-custom-white dark:bg-custom-white dark:text-custom-dark-gray"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }} 
                        >
                            <p className="text-xs mr-2">Nutrional Info</p>
                            <svg className="fill-current text-custom-white dark:text-custom-dark-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/></svg>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export async function getStaticProps({params}) {
    const prisma = new PrismaClient();
    const product = await prisma.product.findFirst({
        where: {
            slug: params.slug
        }
    });
  
    return {
      props: {
        product: product
      }
    }
  }

export async function getStaticPaths() {
    const prisma = new PrismaClient();
    const products = await prisma.product.findMany();

    const paths = products.map(product => {
        return {
            params: {
                slug: product.slug
            }
        }
    })

    return {
        paths, fallback: false
    }
}

export default ProductPage;
