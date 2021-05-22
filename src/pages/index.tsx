import Head from 'next/head';
import Modal from 'react-modal';
import axios from 'axios';
import { config } from '../services/endpoits'
import { ToastContainer } from 'react-toastify';
import { Hero } from '../components/Hero';
import { BestRecipes } from '../components/BestRecipes';
import { BestServices } from '../components/BestServices';
import { Blog } from '../components/Blog';
import { JoinMembership } from '../components/JoinMembership';
import { Footer } from '../components/Footer';
import { GetServerSideProps, GetStaticProps } from 'next';
import { useState } from 'react';
import { RegisterModal } from '../components/RegisterModal';

interface RecipeProps {
  id: number;
  title: string;
  image: string;
};

interface BlogsProps {
  id: number;
  author: string;
  avatar: string;
  title: string;
  image: string;
  url: string;
};

interface HomeProps {
  recipes: RecipeProps[];
  blogs: BlogsProps[];
};

Modal.setAppElement('#__next');

export default function Home({ recipes, blogs }: HomeProps) {
  const [ isRegisterModalOpen, setIsRegisterModalOpen ] = useState(false);

  function handleOpenRegisterModal() {
    setIsRegisterModalOpen(true)
  };

  function handleCloseRegisterModal() {
    setIsRegisterModalOpen(false)
  };
  
  return (
    <>
      <Head>
        <title> Home | Healthy Food</title>
      </Head>

      {/* HOME */}
      <>
        <Hero 
          onOpenRegisterModal={handleOpenRegisterModal} 
        />

        <BestRecipes recipes={recipes} />
        <BestServices />
        <Blog blogs={blogs} />
        <JoinMembership />
        <Footer />      

        <RegisterModal 
          isOpen={isRegisterModalOpen}
          onRequestClose={handleCloseRegisterModal}
        />
        <ToastContainer />
      </>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const url = config.url.API_URL;
  
  //  get recipes
  const response = await axios.get(`${url}/api/recipes`);
  const recipes = await response.data;

  //  get blogs
  const res = await axios.get(`${url}/api/blogs`);
  const blogs = await res.data;

  return {
    props: {
      recipes,
      blogs
    }
  }
}