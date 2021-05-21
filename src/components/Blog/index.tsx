import { BlogContainer, BlogContent, Card, CardsContainer } from "./styles";
import { BsArrowRight } from 'react-icons/bs'
import { useState } from "react";

interface BlogsProps {
  id: number;
  author: string;
  avatar: string;
  title: string;
  image: string;
  url: string;
}

interface BlogPageProps {
  blogs: BlogsProps[];
}


export function Blog({ blogs }: BlogPageProps) {
  const [ translate, setTranslate ] = useState(false); 

  function handleTranslate() {
    setTranslate(!translate);
  }

  return (
    <BlogContainer>
      <BlogContent>
        <header>
          <h1>
            Read Our Blog
          </h1>

          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </header>

        <CardsContainer >
          <button onClick={handleTranslate}>
            <BsArrowRight className={translate ? 'rotate' : null} />
          </button>
          
          {blogs.map(blog => {

            return (
              <Card href={`/${blog.url}`} key={blog.id} translate={translate ? 'yes' : 'no'}>
                  <img src={blog.image} alt={blog.title} />

                  <div>
                    <h3>{blog.title}</h3>
                    
                    <div>
                      <img src={blog.avatar} alt={blog.author} />
                      <p>{blog.author}</p>
                    </div>
                  </div>
              </Card>
            )
          })}
        </CardsContainer>
      </BlogContent>
    </BlogContainer>
  )
}