import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSelected } from '../context/SelectedContext';

const Product = ({ product, index }) => {

    const {selectedIndex, setSelectedIndex} = useSelected();

    const { flavour, description, image, slug, color } = product;

    return (
        <Link href={`/product/${slug}`}>
            <a onClick={() => setSelectedIndex(index)}>
                <motion.div className="flex flex-col items-center min-h-full" >
                    <div className="w-11/12 sm:w-10/12 md:w-4/5 lg:w-4/5 xl:w-3/4 2xl:w-3/5 px-10 relative">
                        <motion.div layoutId={product.id} className="rounded-full w-full h-64 absolute left-0 top-6 transform" style={{ backgroundColor: color}}>
                        </motion.div> 
                        <motion.div layoutId={flavour}>
                            <Image src={`/product-images/${slug}.png`} width={200} height={380} quality={90} layout="responsive"></Image>
                        </motion.div>
                    </div>
                    <h1 className="font-lora text-xl mt-6">{flavour}</h1>
                </motion.div>
            </a>
        </Link> 
    );
}

export default Product;
