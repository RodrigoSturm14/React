export function ProductCard(){
   return(
      <article className="pr-Card">
         <img className="pr-img" alt="Denim Jeans" src="https://th.bing.com/th/id/R.49161518f88df4dfddd1311b230ca6a6?rik=J62ucW90pxKlVg&riu=http%3a%2f%2fimg.verodillan.com%2fimage%2f20180428%2f2810433027d01455502233.jpg&ehk=t0zlcV2pVd%2fKTg6cE9wL5NuBugfQX%2fQnrInZ9ShyiB0%3d&risl=&pid=ImgRaw&r=0" />
         <h1>Tailored Jeans</h1>
         <span className="pr-CardStock">$19.99</span>
         <p>Some text about the jeans..</p>
         <button className="pr-CardButton">Add to Cart</button>
      </article>
   );
};