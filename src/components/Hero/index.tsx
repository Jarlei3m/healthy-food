import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { HeaderContent, HeroContainer, HeroContent, ImageSmall, ImageWide, MenuSmall, MenuWide } from './styles';

interface HeroProps {
  onOpenRegisterModal: () => void;
}

export function Hero({ onOpenRegisterModal }: HeroProps) {
  const [ hasNavBar, setHasNavBar ] = useState(false);
  const [ isNavModalOpen, setIsNavModalOpen ] = useState(null);
  const [ widthSize, setWidthSize ] = useState(0)

  function handleNavModalOpen() {
    setIsNavModalOpen(!isNavModalOpen)
  }

  const handleResize = () => {
    setWidthSize(window.innerWidth);

    if (window.innerWidth <= 580) {
      setHasNavBar(true);
    } else {
      setHasNavBar(false);
    }
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

          <MenuWide>
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
          </MenuWide>

          <MenuSmall>
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
          </MenuSmall>
        
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

        <ImageWide src="images/Illustration.svg" alt="Healthy food background" />
        <ImageSmall src="images/bg.svg" alt="Healthy food background" />
      </HeroContent>
    </HeroContainer>
  )
}