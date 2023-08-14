import React from 'react';
import {Container, Typography, Box } from '@mui/material';
import useCheckMobileScreen from './../../components/checkMobileScreen'
import ava from './../../assets/images/ava.jpg'

const AboutPage = () => {
    const isMobile = useCheckMobileScreen();

    return (
        <div>
            <Container 
                maxWidth='false'
                sx={{
                height: 'auto',
                width: '1080px',
                margin: '0 auto',
                maxWidth: '100%',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                    textAlign: 'center',
                    paddingTop: isMobile ? '4vh' : '5vh',
                    }}
                >
                    Một vài lời giới thiệu ...
                </Typography>

                <Box
                    sx={{
                    backgroundImage: `url(${ava})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    height: isMobile ? '40vh' : '800px',
                    width: 'inherit',
                    margin: '0 auto',
                    maxWidth: '100%',
                    padding:'2vh 0'
                    }}
                >
            
                </Box>

                <Typography
                    variant="h6"
                    sx={{
                        textAlign: 'left',
                        paddingTop: '2.5vh',
                        paddingBottom:'2vh'
                    }}
                >        
                Chào cả nhà,
                mình là Lê Thị Hồng Phượng, hay còn được gọi là cô Tư. Mình xuất thân là cô gái miền quê, dẫu có hơn 30 năm sống tại Sài Gòn, nhưng vẫn mãi nhớ về những năm tháng tuổi thơ, sống tự nhiên, giản dị nơi quê nhà… 
                Và vì thế mình vẫn luôn theo đuổi lối sống XANH.
                Gần đây, nhận thấy nhiều người thân xung quanh mình, từ mẹ già cho đến các con, các cháu tuổi thanh thiếu niên thường xuyên bị rụng tóc, ngứa da đầu, gàu…, mình mày mò học hỏi và tham gia các khóa làm dầu gội để gia đình dùng thử. 
                Kết quả vượt ngoài sự mong đợi. 
                Mẹ già hết rụng tóc, các cháu hết ngứa đầu, còn mình cảm nhận được tóc con mọc lên khá nhiều sau mấy tháng sử dụng DẦU GỘI NHÀ LÀM 😛
                Thừa thắng xông lên, đam mê vẫn tràn đầy, mình nghiên cứu thêm để làm ra các sản phẩm khác như sữa tắm, bột gội đầu 15 vị thảo mộc, nước rửa chén…. hoàn toàn từ những nguyên liệu tự nhiên, không hóa chất tạo màu, tạo mùi, chất bảo quản độc hại… 
                Sản phẩm đã được gửi cho rất nhiều người xài thử với phản hồi rất tốt, và đặc biệt mình đã gửi đi kiểm nghiệm tại Trung tâm kỹ thuật tiêu chuẩn đo lường Chất lượng 3 theo kết quả (đính kèm).
                Nay mình muốn lan tỏa lối sống XANH, muốn trao giải pháp và chia sẻ những sản phẩm tự nhiên này đến tất cả mọi người. 
                Vì thế, chuỗi sản phẩm thương hiệu CÔ TƯ ra đời.
                “CÔ TƯ” là cách các cháu gọi mình, mộc mạc như chính con người và sản phẩm của mình vậy. 
                Cảm ơn cả nhà mình 🥰🥰🥰
                </Typography>

            </Container>
        </div>
    )}

export default AboutPage;