import React from 'react';
import { useParams } from 'react-router-dom';
import ProductContent from './productContent'; // Import the generic component
import dauGoiImg from './../../assets/images/dau_goi2.jpg'
import suaTamImg from './../../assets/images/sua_tam2.jpg'
import goiBotImg from './../../assets/images/goi_bot.jpg'

const ProductPage = () => {
  const { sanpham } = useParams();

  const productData = {
    'dau-goi': {
      title: 'DẦU GỘI BỒ KẾT THẢO MỘC',
      price: '110,000',
      quantity: '1 chai 300ml',
      imageSrc: dauGoiImg,
      ingredients: 'Bồ kết, hà thủ ô đỏ, ngải cứu, dâm bụt, dâu tằm, cỏ ngũ sắc, cỏ mực, cỏ mần trầu, xuyến chi, hương nhu, gừng, sả, chanh, vỏ bưởi, lá neem, nha đam, tinh dầu vỏ bưởi, tinh dầu oải hương, tinh dầu hương nhu, tinh dầu sả chanh, tinh dầu bạc hà và phụ gia hữu cơ: xanthan gum, glycerin, chất tạo bọt từ dầu dừa coco betaine, decyl glucoside, chất bảo quản chiết xuất tự nhiên, Pro-vitamin B5. ',
      usage: ['Làm sạch da đầu, kích thích mọc tóc, giảm rụng, giảm gàu, ngứa và viêm da đầu.'],
      howToUse: ['Làm ướt tóc, thoa dầu gội, massage tóc nhẹ nhàng 5-10 phút để làm sạch bụi bẩn, thư giãn da đầu với mùi thảo mộc.' , 'Xả sạch tóc với nước, lặp lại lần nữa (nếu muốn). Dùng khăn mềm lau khô tóc, chờ tóc khô tự nhiên.', 'Tránh tiếp xúc với mắt do bồ kết làm cay mắt.'],
    },
    'sua-tam': {
      title: 'SỮA TẮM GỪNG NGHỆ',
      price: '110,000',
      quantity: '1 chai 300ml',
      imageSrc: suaTamImg,
      ingredients: 'Gừng, nghệ, lá ổi, khổ qua rừng, hương nhu, ngũ sắc, xuyến chi, lá neem, sả, chanh, nha đam, tinh dầu gừng và phụ gia hữu cơ: xanthan gum, glycerin, chất tạo bọt từ dầu dừa coco betaine, decyl glucoside, chất bảo quản chiết xuất tự nhiên, vitamin E.',
      usage: ['Làm sạch da toàn thân bằng thảo mộc, mang lại làn da mịn màng.', 'Giảm mụn vùng lưng, loại bỏ vi khuẩn và mùi cơ thể.', 'An toàn cho mẹ bầu và trẻ nhỏ.', 'Ít bọt nên sạch nhanh và tiết kiệm nước.'],
      howToUse: ['Lấy sản phẩm vào lòng bàn tay hoặc miếng bọt biển.','Mát-xa nhẹ nhàng trên da ướt để tạo bọt.','Tắm lại với nước sạch. Tránh tiếp xúc với mắt.'],
    },
    'bot-goi-dau': {
      title: 'BỘT GỘI ĐẦU 15 VỊ',
      price: '60,000',
      quantity: '10 túi lọc',
      imageSrc: goiBotImg,
      ingredients: 'Bồ kết tách hạt nướng, bồ hòn, hà thủ ô đỏ, cỏ mực, cỏ ngũ sắc, cỏ mần trầu, xuyến chi, hương nhu, gừng, sả, vỏ bưởi, lá neem, núc nác, quế, chanh khô.',
      usage: ['Làm sạch da đầu, kích thích mọc tóc, hạn chế bạc tóc sớm ở người trẻ, giảm rụng, giảm gàu, ngứa và viêm da đầu.'],
      howToUse:[' Có thể nấu hoặc hãm nước sôi cùng 1 quả chanh thái lát và ít hoa nhài khô kèm theo: cho túi lọc vào 500ml nước, đun sôi 5 phút hoặc hãm tầm 10 phút, cho ra thau thêm nước lạnh vào cho âm ấm rồi vò vò túi lọc cho ra hết chất.', 'Xối nước gội lên đầu và masage tóc nhẹ nhàng 3-5 phút để làm sạch bụi bẩn, thư giãn với mùi thảo mộc thơm lừng.', 'Xả lại tóc với nước, dùng khăn mềm lau khô tóc, chờ tóc khô tự nhiên.', 'Tránh tiếp xúc với mắt do bồ kết làm cay mắt.', 'Tóc thường xuyên nhuộm thì không nên bỏ chanh hoặc bỏ ít chanh vì chanh dễ làm phai màu tóc.', 'Tóc ngắn có thể dư nước gội, bảo quản trong ngăn mát trong vòng 3-5 ngày hoặc cho vào khay đá để vài tuần khi cần dùng cho vào ít nước sôi để làm ấm nước gội.'],
    }
  };

  const selectedProduct = productData[sanpham] || {}; // Get the product data based on the anchor

  return (
    <div>
      <ProductContent {...selectedProduct} />
    </div>
  );
};

export default ProductPage;
