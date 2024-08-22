const CollectionPage = () => {
  const products = [
    {
      id: 1,
      image: 'product-image-1.jpg',
      title: 'Product 1',
      price: 50.0,
    },
    {
      id: 2,
      image: 'product-image-2.jpg',
      title: 'Product 2',
      price: 30.0,
    },
    // Add more products to the array
  ];

  return (
    <div className='collection-page'>
      <div className='header'>
        <h1>Featured Collection</h1>
        <p>Explore our latest and greatest products</p>
      </div>
      <div className='product-grid'>
        {products.map((product) => (
          <div
            key={product.id}
            className='product-card'>
            <img
              src={product.image}
              alt={product.title}
            />
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
