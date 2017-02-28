import React from 'react'
import './HomeView.scss'

class MyTitle extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        data:[
          {
            title:'MyBatis简易教程',
            about:{
              time:'2017-02-12',
              leader:'Java',
              comment:0
            },
            content:'MyBatis是一个优秀的ORM(对象关系映射)框架，和Hibernate不太一样，Hibernate不用你编写一行SQL语句，而MyBatis需要手写SQL语句，优点就是能够灵活调试SQL语句。这篇文章主要对MyBatis的几个核心概念进行介绍，以及如何在项目中使用MyBatis。'
          },
          {
            title:'SED常用命令介绍',
            about:{
              time:'2017-02-08',
              leader:'Linux',
              comment:0
            },
            content:'SED是一个简单强大的文本处理工具，作为标准命令被收集到UNIX系的OS中，它将指定的文本逐行读入，根据给定的条件进行处理。把sed当做单行脚本使用，紧跟着-e选项，就能把处理的内容作为脚本记述下来，如果用-f选项，就可以读取事先准备的脚本文件。'
          },
          {
            title:'Hexo博客添加站内搜索',
            about:{
              time:'2017-02-02',
              leader:'hexo',
              comment:0
            },
            content:'NexT主题支持集成 Swiftype、 微搜索、Local Search 和 Algolia,Swiftype和Algolia都只有一段时间的试用期，可以采用Hexo提供的Local Search,原理是通过hexo-generator-search插件在本地生成一个search.xml文件，搜索的时候从这个文件中根据关键字检索出相应的链接。'
          }
        ]
      };
    }

    handleChange(e) {
      let name = e.target.value;
      this.setState({
        name: name
      });
    }

    render() {
      let blogText = this.state.data.map((text,index) => {
        return (
          <div className="blog-item" key={'mykey' + index}>
            <h2>{text.title}</h2>
            <div className="blog-item-time">
              <div className="blog-item-time-item blog-item-time-nop">发表于 {text.about.time}</div>
              <div className="blog-item-time-item">分类于{text.about.leader}</div>
              <div className="blog-item-time-item blog-item-time-nob">暂无评论</div>
            </div>
            <div className="blog-item-text">
              {text.content}
            </div>
            <div className="blog-item-read">
                阅读全文 »
            </div>
          </div>
        )
      })
      return (
        <div className="blog-home">
            {blogText}
        </div>
      )
    }
  };

export const HomeView = () => (
  <MyTitle/>
)

export default HomeView
