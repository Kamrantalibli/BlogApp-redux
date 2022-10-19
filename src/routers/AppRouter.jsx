import React, { Component } from 'react'
import { BrowserRouter,Route, Routes, Switch } from 'react-router-dom'
import Blogs from '../components/pages/blog/Blogs'
import Home from '../components/pages/Home'
import Nav from '../components/Nav'
import Dashboard from '../components/pages/dashboard/Dashboard'
import NotFoundPage from '../components/pages/NotFoundPages'
import AddBlog from '../components/pages/form/AddBlog'
import BlogDetails from '../components/pages/blog/BlogDetails'
import EditBlogPage from '../components/pages/form/EditBlogPage'
import Login from '../components/authentication/Login'


    const AppRouter =()=>{
      return(
        <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/blogs' exact component={Blogs}></Route>
          <Route path='/blogs/:id' component={BlogDetails}></Route>
          <Route path='/admin' component={Dashboard}></Route>
          <Route path='/add' component={AddBlog}></Route>
          <Route path='/edit/:id' component={EditBlogPage}></Route>
          <Route path='/login' component={Login}></Route>
          <Route component={NotFoundPage}></Route>
          </Switch>
        </BrowserRouter>
      )
    }


export default AppRouter