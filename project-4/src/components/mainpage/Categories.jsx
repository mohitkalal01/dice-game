import React from 'react'

const Categories = () => {
    const data =[
        {
            cateImg: "/images/cat1.png",
            cateName:"Fashion"
        },
        {
            cateImg: "/images/cat2.png",
            cateName:"Electronic"
        },
        {
            cateImg: "/images/cat5.png",
            cateName:"Gift"
        },
        {
            cateImg: "/images/cat4.png",
            cateName:"Home & Garden"
        },
        {
            cateImg: "/images/cat9.png",
            cateName:"Baby Toys"
        },
        {
            cateImg: "/images/cat11.png",
            cateName:"Books"
        },
        {
            cateImg: "/images/cat6.png",
            cateName:"Music"
        },
        {
            cateImg: "/images/cat8.png",
            cateName:"pets"
        },
        {
            cateImg: "/images/cat10.png",
            cateName:"Groceries"
        },
        {
            cateImg: "/images/cat7.png",
            cateName:"Health & Beauty"
        },
        {
            cateImg: "/images/cat10.png",
            cateName:"Fashion"
        },
    ]
  return (
    <>
      <>
        <div className="category">
{data.map((value, index)=>{
    return(
        <div className="box f_flex" key = {index}>
            <img src={value.cateImg} alt="" />
            <span>{value.cateName}</span>
        </div>
    )
})}

        </div>
      </>
    </>
  )
}

export default Categories;
