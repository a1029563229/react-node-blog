import React from 'react';
import './MenuView.scss';

class MyMenu extends React.Component {
  render() {
    return (
      <div className="blog-menu">
          <h1>categories</h1>
          <div className="menu-count">
              目前总计27个分类
          </div>
          <div className="menu-list">
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Android</span>(4)
                    <div className="menu-list-item-second">
                      <span>programming</span>(3)
                    </div>
                    <div className="menu-list-item-second">
                      <span>reprints</span>(2)
                    </div>
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Hexo</span>(1)
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Html</span>(1)
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Css</span>(1)
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Javascripts</span>(1)
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Jquery</span>(1)
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Android</span>(4)
                    <div className="menu-list-item-second">
                      <span>programming</span>(3)
                    </div>
                    <div className="menu-list-item-second">
                      <span>reprints</span>(2)
                    </div>
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Android</span>(4)
                    <div className="menu-list-item-second">
                      <span>programming</span>(3)
                    </div>
                    <div className="menu-list-item-second">
                      <span>reprints</span>(2)
                    </div>
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Android</span>(4)
                    <div className="menu-list-item-second">
                      <span>programming</span>(3)
                    </div>
                    <div className="menu-list-item-second">
                      <span>reprints</span>(2)
                    </div>
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Android</span>(4)
                    <div className="menu-list-item-second">
                      <span>programming</span>(3)
                    </div>
                    <div className="menu-list-item-second">
                      <span>reprints</span>(2)
                    </div>
              </div>
            </div>
            <div className="menu-list-item">
              <div className="menu-list-item-first">
                  <span>Android</span>(4)
                    <div className="menu-list-item-second">
                      <span>programming</span>(3)
                    </div>
                    <div className="menu-list-item-second">
                      <span>reprints</span>(2)
                    </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
};

export const MenuView = () => (
  <MyMenu />
);

export default MenuView
