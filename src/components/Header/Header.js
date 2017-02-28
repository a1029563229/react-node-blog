import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="header-box">
    <div className="header">
      <h1>Invincible Blog</h1>
      <div className="header-item">
        <IndexLink to='/' activeClassName='route--active'>
          首页
        </IndexLink>
        {' · '}
        <Link to='/menu' activeClassName='route--active'>
          分类
        </Link>
        {' · '}
        <Link to='/zen' activeClassName='route--active'>
          爬虫
        </Link>
        {' · '}
        <Link to='/elapse' activeClassName='route--active'>
          计时器
        </Link>
        {' · '}
        <Link to='/route/88' activeClassName='route--active'>
          路由
        </Link>
        {' · '}
        <Link to='/notFound' activeClassName='route--active'>
          404
        </Link>
      </div>
    </div>
  </div>
)

export default Header
