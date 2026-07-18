// import { useContext } from 'react'
// import { ProductContext } from '../products.context'
// import { getAllProducts, getProductById, udpateProduct, deleteProduct, createProduct } from '../services/products.api'

// export const useProduct = () => {
//     const context = useContext(ProductContext);
//     const { loading, product, products, setLoading, setProducts, setProduct } = context;

//     const handleProducts = async () => {
//         setLoading(true);
//         try {
//             const data = await getAllProducts();
//             setProducts(data.products);
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false);
//         }

//     }
//     const handleProductByID = async ({productId}) => {
//         setLoading(true);
//         try {
//             const data = await getProductById({productId});
//             setProduct(data.product);
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false);
//         }

//     }
//     const handleUpdateProduct = async ({productId, productData}) => {
//         setLoading(true);
//         try {
//             const data = await udpateProduct({productId, productData});
//             setProduct(data.udpateProduct);
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false);
//         }
//     }
//     const handleDeleteProduct = async ({productId}) => {
//         setLoading(true);
//         try {
//             await deleteProduct({productId});
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false);
//         }

//     }
//     const handleCreateProduct = async () => {
//         setLoading(true);
//         try {
//             const data = await createProduct();
//             setProduct(data.savedProduct);
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false);
//         }

//     }

//     return { handleCreateProduct, handleDeleteProduct, handleProductByID, handleProducts, handleUpdateProduct, loading, product, products }

// }