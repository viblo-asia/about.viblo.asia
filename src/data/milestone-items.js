const renderLink = (label, href) => `<a href="${href}" target="_blank" class="underline">${label}</a>`

const links = {
  viblo: renderLink('Viblo', 'https://viblo.asia'),
  browserExtension: renderLink('Browser Extension', 'https://chrome.google.com/webstore/detail/viblos-news-feed/mliahmjgdpkkicelofhbhgiidgljijmj'),
  github: renderLink('https://github.com/viblo-asia', 'https://github.com/viblo-asia'),
  machineLearning: renderLink('https://machine-learning.viblo.asia', 'https://machine-learning.viblo.asia'),
  qa: renderLink('Question & Answer', 'https://viblo.asia/questions'),
  app: renderLink('Smartphone', 'https://viblo.asia/app'),
  code: renderLink('Viblo Code', 'https://code.viblo.asia'),
  ctf: renderLink('Viblo CTF', 'https://ctf.viblo.asia'),
  cv: renderLink('Viblo CV', 'https://cv.viblo.asia'),
  mayfest: renderLink('Viblo May Fest', 'https://mayfest.viblo.asia'),
  birthday: renderLink('5 năm thành lập Viblo', 'https://5years.viblo.asia')
}

export default [
  {
    date: '10.2014',
    mess: `Dự án ${links.viblo} (Vietnam IT Blog) được khởi động với mục đích tạo ra một cộng đồng nơi thành viên có thể chia sẻ, học hỏi kiến thức Công nghệ thông tin bằng tiếng mẹ đẻ.`
  },
  {
    date: '03.11.2014',
    mess: 'Commit đầu tiên của dự án Viblo được thực hiện với nội dung "First commit: Add Laravel 4.2"'
  },
  {
    date: '03.04.2015',
    mess: 'Viblo chính thức được ra mắt.'
  },
  {
    date: '10.2016',
    mess: 'Viblo được tái tạo, sử dụng công nghệ, ngôn ngữ thiết kế mới hơn, hiện đại hơn, phục vụ tốt hơn cho quá trình mở rộng.'
  },
  {
    date: '29.12.2016 ',
    mess: 'Viblo Version 2 được ra mắt, thay thế hoàn toàn phiên bản cũ với logo, design được làm mới, và rất nhiều tính năng bổ sung.'
  },
  {
    date: '24.03.2017',
    mess: `Ra mắt ${links.browserExtension}, giúp người dùng dễ dàng tiếp cận nội dung, thông báo mới từ phía Viblo.`
  },
  {
    date: '15.05.2017',
    mess: 'Ra mắt Atom Editor, giúp người dùng dễ dàng tạo, chỉnh sửa, lưu trữ và publish bài viết trên Viblo thông qua Atom Editor.'
  },
  {
    date: '10.07.2017',
    mess: 'Ra mắt tính năng Video Podcad, nhằm thúc đẩy việc chia sẻ kiến thức đa dạng, giúp người dùng học tập dễ dàng hơn.'
  },
  {
    date: '08.08.2017',
    mess: `Ra mắt tính năng ${links.qa}, giúp người dùng đặt câu hỏi để nhận được trợ giúp từ thành viên khác.`
  },
  {
    date: '26.11.2017',
    mess: 'Viblo Deployment Day, sự kiện công nghệ đầu tiên của Viblo, do Viblo và vì cộng đồng người dùng Viblo.'
  },
  {
    date: '23.04.2018',
    mess: `Ra mắt ứng dụng ${links.app} trên 2 nền tảng Android & iOS, giúp người dùng có thể dễ dàng tiếp cận với nguồn kiến thức phong phú được chia sẻ trên Viblo hàng ngày.`
  },
  {
    date: '28.05.2018',
    mess: `Open source nhiều services được sử dụng bởi Viblo tại địa chỉ ${links.github}`
  },
  {
    date: '31.05.2018',
    mess: 'Đạt cột mốc 1 triệu Pageview/tháng, đánh dấu sự phát triển lớn mạnh của Viblo.'
  },
  {
    date: '26.06.2018',
    mess: 'Thông báo về việc trở thành đơn vị bảo trợ truyền thông của sự kiện OpenDev. Các bài thuyết trình tại sự kiện được ghi hình và công bố trên Viblo sau đó.'
  },
  {
    date: '24.09.2018',
    mess: `Ra mắt chuyên trang giới thiệu về các dịch vụ sử dụng Machine Learning của Viblo, tại địa chỉ ${links.machineLearning}, đồng thời thông báo về định hướng ứng dụng Machine Learning trong việc cải thiện trải nghiệm người dùng tại Viblo trong thời gian tới.`
  },
  {
    date: '25.09.2018',
    mess: 'Thông báo về việc trở thành đơn vị bảo trợ truyền thông của sự kiện Blockchain lớn bậc nhất tại Việt Nam, tiêu điểm Hackathon & Meetup "State of Chain 2018"...'
  },
  {
    date: '10.2018',
    mess: 'Viblo chuyển đổi định hướng hoạt động từ một service thành một Platform: Viblo Platform, chuẩn bị khai sinh ra các service mới gia nhập hệ sinh thái của Viblo.'
  },
  {
    date: '20.02.2019',
    mess: 'Ra mắt chức năng "Organization" trên Viblo, giúp các team, công ty có thể chia sẻ về những sứ mệnh, tầm nhìn và những kinh nghiệm làm việc của mình trong ngành IT.'
  },
  {
    date: '11.03.2019',
    mess: `Viblo chính thức ra mắt dịch vụ mới: ${links.code}!`
  },
  {
    date: '20.04.2019',
    mess: 'Tổ chức thành công chung kết cuộc thi Code Challenge 2019, sau vòng loại đã tổ chức ngày 11.04.2019'
  },
  {
    date: '31.03.2019',
    mess: 'Cán mốc 1.5 triệu pageview/tháng'
  },
  {
    date: '23.05.2019',
    mess: `Viblo chính thức ra mắt dịch vụ mới: ${links.cv}!`
  },
  {
    date: '03.10.2019',
    mess: `Viblo Platform: chính thức ra mắt ${links.ctf}!`
  },
  {
    date: '04.2020',
    mess: `Diễn ra Viblo Code Contest và Viblo CTF Contest mừng kỷ niệm ${links.birthday}`
  },
  {
    date: '01-31.05.2020',
    mess: `Diễn ra sự kiện ${links.mayfest} - Lễ hội chia sẻ kiến thức về công nghệ thông tin`
  }
]
