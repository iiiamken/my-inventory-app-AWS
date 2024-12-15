import Header from "../(components)/Header"
import { v4 } from "uuid"

type ProductFormData = {
  name: string
  price: number
  stockQuantity: number
  rating: number
}

type CreateProductModalProps = {
  isOpen: boolean
  onClose: () => void
  onCreate: (formData: ProductFormData) => void
}

export default function CreateProductModal({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  })

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name={"Create New Product"} />
      </div>
    </div>
  )
}
