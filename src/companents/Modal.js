

export default function Modal() {
  return (
    <div className="w-[80%] h-56 bg-orange-400 m-auto">
      <div>
        <h3>
          Remove all list from your basket?
        </h3>
        <div>
        <button className="bg-red-500">Confirm</button>
        <button className="bg-gray-500">Cancel</button>
        </div>
      </div>
    </div>
  )
}
