interface ProductProps {
  params: {
    id: string;
  }
}
export default function Product({ params }: ProductProps) {
  return (
    <div>Product: {params.id}</div>
  )
}
