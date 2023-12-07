// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./InnerLayout.css"
import { BreadCrumb } from 'primereact/breadcrumb';
import Layout from '../Layout/Layout';

const InnerLayout = () => {
    const items = [{ label: 'Men Clothing' }, { label: 'Men T Shirt' }];
    const home = { label: "Home", url: 'https://primereact.org' }

  return (
    <div className='inner-layout-container'>
        <BreadCrumb className='bc-menu' model={items} home={home} />
        <Layout />
    </div>
  )
}

export default InnerLayout