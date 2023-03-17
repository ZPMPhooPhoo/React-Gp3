import React from 'react'
import { Outlet } from 'react-router-dom'
import BlogTitle from '../components/blog/blog_title'
import BlogItem from '../components/blog/blog_item'
import BlogItemDetail from '../components/blog/blog_item_detail'
import Logo from '../components/home/logo';
import Menu from '../components/home/menu';
import "./blog.css";

const blog_item = () => {
  return (
    <div>
      <section id="blog">
          <div className="l-wrap-outer">
            <div className="l-wrap-inner">
            <header>
              <div className="l-wrap-outer">
                <div className="l-wrap-inner">
                  <nav>
                    <Logo />
                    <Menu />
                  </nav>
                </div>
              </div>
            </header>
              <div className="blog">
                <BlogTitle titleName={"TRAVEL TIPS & GUIDES"} />

                <div className="blog_wrap">
                  <BlogItem
                    itemImage={
                      "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-kai-pilger-547494.jpg"
                    }
                    itemTitle={
                      "7 Europe Travel Essentials You Can’t Travel Without"
                    }
                    itemText={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                    }
                    itemLink={"READ MORE..."}
                  />

                  <BlogItem
                    itemImage={
                      "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-oleksandr-pidvalnyi-1008155.jpg"
                    }
                    itemTitle={"10 Tips for Solo Female Travel"}
                    itemText={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                    }
                    itemLink={"READ MORE..."}
                  />

                  <BlogItem
                    itemImage={
                      "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-lara-jameson-8828439-1536x1024.jpg"
                    }
                    itemTitle={"Budget Travel Tips in 2022 That You Must Know"}
                    itemText={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                    }
                    itemLink={"READ MORE..."}
                  />

                  <BlogItem
                    itemImage={
                      "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-ethan-brooke-2128042-scaled.jpg"
                    }
                    itemTitle={"Seoul South Korea Travel Itinerary"}
                    itemText={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                    }
                    itemLink={"READ MORE..."}
                  />

                  <BlogItem
                    itemImage={
                      "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-frederik-sorensen-2404843-scaled.jpg"
                    }
                    itemTitle={"24 Hours in New York City (Things You MUST Do)"}
                    itemText={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                    }
                    itemLink={"READ MORE..."}
                  />

                  <BlogItem
                    itemImage={
                      "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-jimmy-teoh-1010657-768x512.jpg"
                    }
                    itemTitle={"3-Day Weekend in Athens Greece"}
                    itemText={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                    }
                    itemLink={"READ MORE..."}
                  />

                  <BlogItem
                    itemImage={
                      "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-allphoto-bangkok-13612696-768x513.jpg"
                    }
                    itemTitle={"Grindelwald Switzerland Travel Guide"}
                    itemText={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                    }
                    itemLink={"READ MORE..."}
                  />

                  <BlogItem
                    itemImage={
                      "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-chelsea-cook-2929906-600x450.jpg"
                    }
                    itemTitle={"Machu Picchu Travel Guide"}
                    itemText={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                    }
                    itemLink={"READ MORE..."}
                  />

                  <BlogItem
                    itemImage={
                      "https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-pixabay-259447-600x338.jpg"
                    }
                    itemTitle={"Cape Town South Africa Travel Guide"}
                    itemText={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem"
                    }
                    itemLink={"READ MORE..."}
                  />

                  <Outlet />
                </div>
              </div>

              
            </div>
          </div>
      </section>

      <section id="blog-detail">
        <div className="l-wrap-outer">
          <div className="l-wrap-inner">
            <BlogItemDetail
            itemDetailImage={"https://thetravelblog.samanthadigitalsites.com/wp-content/uploads/2022/09/pexels-kai-pilger-547494.jpg"} 
            itemDetailTitle={"7 Europe Travel Essentials You Can’t Travel Without"}
            itemDetailText={"Ut ornare lectus sit amet. Nibh tortor id aliquet lectus. Netus et malesuada fames ac turpis egestas integer eget. Sit amet mauris commodo quis imperdiet massa. Facilisis magna etiam tempor orci eu. Mauris a diam maecenas sed enim ut sem. Sem fringilla ut morbi tincidunt. Nulla malesuada pellentesque elit eget gravida cum. Lacus luctus accumsan tortor posuere. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Fames ac turpis egestas integer eget aliquet nibh praesent. Dui faucibus in ornare quam viverra. Lacus vestibulum sed arcu non odio euismod. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.Ultrices in iaculis nunc sed augue lacus viverra vitae. Amet commodo nulla facilisi nullam vehicula ipsum a. Eu turpis egestas pretium aenean pharetra magna. Nisl purus in mollis nunc. Purus sit amet volutpat consequat. Convallis convallis tellus id interdum velit laoreet id. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Vitae turpis massa sed elementum tempus egestas sed. Lorem ipsum dolor sit amet consectetur. Pellentesque adipiscing commodo elit at imperdiet dui. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Sed odio morbi quis commodo odio aenean sed adipiscing. Pulvinar sapien et ligula ullamcorper malesuada. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Arcu odio ut sem nulla pharetra diam."}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default blog_item