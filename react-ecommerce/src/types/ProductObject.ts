export default interface ProductObject {
  id: string,
  title: string,
  price: number,
  image: {
    url: string,
    alt: string,
    width?: number,
    height?: number
  }
}