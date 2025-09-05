export default interface ProductObject {
  title: string,
  price: number,
  image: {
    url: string,
    alt: string,
    width?: number,
    height?: number
  }
}