import Swal from "sweetalert2";

const SalesModal = () => {
  const onClick = () => {
    Swal.fire({
      title: "Promociones del mes de Mayo 2024",
      html: `<p>Con tu compra mayor a $50.000 el envío es gratis dentro de CABA, y tenés un 10% de descuento en cualquiera de nuestros tratamientos faciales!</p>`,
      width: 800,
      padding: "3em",
      showCloseButton: true,
      color: "#000",
      backdrop: "rgba(192, 50, 114, 0.53)",
      background: "#fff",
      imageUrl:
        "https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageWidth: 500,
      imageHeight: 200,
      showConfirmButton: false,
      customClass: {
        title: "text-pink-400",
      },
    });
  };

  return (
    <button
      onClick={onClick}
      className="text-yellow-300 hover:text-yellow-200 animate-pulse font-bold underline underline-offset-2"
    >
      PROMO DEL MES
    </button>
  );
};

export default SalesModal;
