import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { HeaderContent, HeroContainer, HeroContent } from './styles';

interface HeroProps {
  onOpenRegisterModal: () => void;
}

export function Hero({ onOpenRegisterModal }: HeroProps) {
  const [ newSize, setNewSize ] = useState(null);
  const [ isNavModalOpen, setIsNavModalOpen ] = useState(false);

  function handleNavModalOpen() {
    setIsNavModalOpen(!isNavModalOpen)
  }

  const handleResize = () => {
     setNewSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('load', handleResize);
  });

  return (
    <HeroContainer>
      <HeaderContent>
        <h1>Healthy Food</h1>

        {newSize > 425 ? (
          <div>
            <nav>
              <Link href='/healthy-recipes'>
                <a>
                  HEALTHY RECIPES
                </a>
              </Link>
              <Link href='/blog'>
                <a>
                  BLOG
                </a>
              </Link>
              <Link href='/join'>
                <a>
                  JOIN 
                </a>
              </Link>
            </nav>

            <button type='button' onClick={onOpenRegisterModal}>Register</button>
          </div>
        ) : (
          <>
            <nav
              className={isNavModalOpen ? 'navMenu close' : 'navMenu'}
              onClick={() => handleNavModalOpen()}
            >
              <div></div>
              <div></div>
              <div></div>
            </nav>

            <div className={isNavModalOpen ? 'menuModal opened' : 'menuModal'}>
              <nav>
                <Link href='/healthy-recipes'>
                  <a>
                    HEALTHY RECIPES
                  </a>
                </Link>
                <Link href='/blog'>
                  <a>
                    BLOG
                  </a>
                </Link>
                <Link href='/join'>
                  <a>
                    JOIN 
                  </a>
                </Link>
                <button type='button' onClick={onOpenRegisterModal}>Register</button>
              </nav>

            </div>
          </>
        )}
        
      </HeaderContent>

      <HeroContent>
        <article>
          <h1>Ready for Trying a new recipe?</h1>

          <div>
            <input type="text" placeholder='Search healthy recipes' />
            <button>
              <BiSearch />
            </button>
          </div>
        </article>

        {newSize > 899? (
          <img src="images/Illustration.svg" alt="" />
        ) : (
          <img src="images/bg.svg" alt="" />
        )}
      </HeroContent>
    </HeroContainer>
  )
}