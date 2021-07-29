import { PrismaClient } from '@prisma/client';
import Product from "../components/Product";
import SwiperCore, { Mousewheel  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelected } from "../context/SelectedContext";
import { motion } from "framer-motion";

SwiperCore.use([Mousewheel])

export default function Home({ products }) {

  const {selectedIndex, setSelectedIndex} = useSelected();

  return (
    <main className="grid grid-cols-1 grid-rows-5 lg:grid-rows-6 min-h-full pt-24 text-custom-dark-gray dark:text-custom-white bg-custom-white dark:bg-custom-dark-gray">
      <div className="row-span-1 flex items-center justify-center lg:row-span-2">
        <motion.h1 
          exit={{ opacity: 0, y: 40 }}
          className="text-center font-lora text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Fanta.<br/>Be more than one flavor</motion.h1>
      </div>

      <div className="row-span-4 text-center">
        <Swiper
          mousewheel={true}
          centeredSlides={true}
          initialSlide={selectedIndex}
          freeMode={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1.6,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1.8,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2.8,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3.4,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 20
            }
          }}
        >
          {
            products.map((product, index) => {
              return (
                <SwiperSlide style={{ height: '500px'}}>
                  <Product key={product.id} product={product} index={index} />
                </SwiperSlide>
              )
            })
          }      
        </Swiper>
        <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2">
          <p className="text-gray-500">Select a flavour to learn more.</p>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();

  return {
    props: {
      products
    }
  }
}
