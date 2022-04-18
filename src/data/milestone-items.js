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
    message: `Dự án ${links.viblo} (Vietnam IT Blog) được khởi động với mục đích tạo ra một cộng đồng nơi thành viên có thể chia sẻ, học hỏi kiến thức Công nghệ thông tin bằng tiếng mẹ đẻ.`,
    messageEn: `Project ${links.viblo} (Vietnam IT Blog) was started with the aim of creating a community where members can share and learn Information Technology knowledge in their mother tongue.`
  },
  {
    date: '03.11.2014',
    message: 'Commit đầu tiên của dự án Viblo được thực hiện với nội dung "First commit: Add Laravel 4.2"',
    messageEn: 'The first commit of the Viblo project was made with the content "First commit: Add Laravel 4.2"'
  },
  {
    date: '03.04.2015',
    message: 'Viblo chính thức được ra mắt.',
    messageEn: 'Viblo is officially launched.'
  },
  {
    date: '10.2016',
    message: 'Viblo được tái tạo, sử dụng công nghệ, ngôn ngữ thiết kế mới hơn, hiện đại hơn, phục vụ tốt hơn cho quá trình mở rộng.',
    messageEn: 'Viblo is recreated, using newer, more modern technology and design language, better serving the expansion process.'
  },
  {
    date: '29.12.2016 ',
    message: 'Viblo Version 2 được ra mắt, thay thế hoàn toàn phiên bản cũ với logo, design được làm mới, và rất nhiều tính năng bổ sung.',
    messageEn: 'Viblo Version 2 is released, completely replacing the old version with a refreshed logo, design, and lots of additional features.'
  },
  {
    date: '24.03.2017',
    message: `Ra mắt ${links.browserExtension}, giúp người dùng dễ dàng tiếp cận nội dung, thông báo mới từ phía Viblo.`,
    messageEn: `Launched ${links.browserExtension}, helping users easily access new content and notifications from Viblo.`
  },
  {
    date: '15.05.2017',
    message: 'Ra mắt Atom Editor, giúp người dùng dễ dàng tạo, chỉnh sửa, lưu trữ và publish bài viết trên Viblo thông qua Atom Editor.',
    messageEn: 'Launched Atom Editor, making it easy for users to create, edit, store and publish articles on Viblo through Atom Editor.'
  },
  {
    date: '10.07.2017',
    message: 'Ra mắt tính năng Video Podcad, nhằm thúc đẩy việc chia sẻ kiến thức đa dạng, giúp người dùng học tập dễ dàng hơn.',
    messageEn: 'Launching the Video Podcad feature, to promote the sharing of diverse knowledge, making learning easier for users.'
  },
  {
    date: '08.08.2017',
    message: `Ra mắt tính năng ${links.qa}, giúp người dùng đặt câu hỏi để nhận được trợ giúp từ thành viên khác.`,
    messageEn: `Launched the ${links.qa} feature, allowing users to ask questions to get help from other members.`
  },
  {
    date: '26.11.2017',
    message: 'Viblo Deployment Day, sự kiện công nghệ đầu tiên của Viblo, do Viblo và vì cộng đồng người dùng Viblo.',
    messageEn: "Viblo Deployment Day, Viblo's first technology event, by Viblo and for the Viblo user community."
  },
  {
    date: '23.04.2018',
    message: `Ra mắt ứng dụng ${links.app} trên 2 nền tảng Android & iOS, giúp người dùng có thể dễ dàng tiếp cận với nguồn kiến thức phong phú được chia sẻ trên Viblo hàng ngày.`,
    messageEn: `Launching ${links.app} application on 2 platforms Android & iOS, making it easy for users to access the rich knowledge shared on Viblo every day.`
  },
  {
    date: '28.05.2018',
    message: `Open source nhiều services được sử dụng bởi Viblo tại địa chỉ ${links.github}`,
    messageEn: `Open source many services used by Viblo at ${links.github}`
  },
  {
    date: '31.05.2018',
    message: 'Đạt cột mốc 1 triệu Pageview/tháng, đánh dấu sự phát triển lớn mạnh của Viblo.',
    messageEn: 'Reaching the milestone of 1 million Pageviews/month, marking the great growth of Viblo.'
  },
  {
    date: '26.06.2018',
    message: 'Thông báo về việc trở thành đơn vị bảo trợ truyền thông của sự kiện OpenDev. Các bài thuyết trình tại sự kiện được ghi hình và công bố trên Viblo sau đó.',
    messageEn: 'Announcement of becoming the media sponsor of the OpenDev event. The presentations at the event were recorded and published on Viblo afterwards.'
  },
  {
    date: '24.09.2018',
    message: `Ra mắt chuyên trang giới thiệu về các dịch vụ sử dụng Machine Learning của Viblo, tại địa chỉ ${links.machineLearning}, đồng thời thông báo về định hướng ứng dụng Machine Learning trong việc cải thiện trải nghiệm người dùng tại Viblo trong thời gian tới.`,
    messageEn: `Launched a special page about Viblo's Machine Learning services, at ${links.machineLearning}, and announced the direction of Machine Learning application in improving user experience at Viblo in the meantime. next time.`
  },
  {
    date: '25.09.2018',
    message: 'Thông báo về việc trở thành đơn vị bảo trợ truyền thông của sự kiện Blockchain lớn bậc nhất tại Việt Nam, tiêu điểm Hackathon & Meetup "State of Chain 2018"...',
    messageEn: 'Announcement of becoming the media sponsor of the largest Blockchain event in Vietnam, the focus of Hackathon & Meetup "State of Chain 2018"...'
  },
  {
    date: '10.2018',
    message: 'Viblo chuyển đổi định hướng hoạt động từ một service thành một Platform: Viblo Platform, chuẩn bị khai sinh ra các service mới gia nhập hệ sinh thái của Viblo.',
    messageEn: "Viblo transforms its operation orientation from a service to a Platform: Viblo Platform, preparing to give birth to new services to join Viblo's ecosystem."
  },
  {
    date: '20.02.2019',
    message: 'Ra mắt chức năng "Organization" trên Viblo, giúp các team, công ty có thể chia sẻ về những sứ mệnh, tầm nhìn và những kinh nghiệm làm việc của mình trong ngành IT.',
    messageEn: 'Launching the "Organization" function on Viblo, helping teams and companies share their missions, visions and working experiences in the IT industry.'
  },
  {
    date: '11.03.2019',
    message: `Viblo chính thức ra mắt dịch vụ mới: ${links.code}!`,
    messageEn: `Viblo officially launched a new service: ${links.code}!`
  },
  {
    date: '20.04.2019',
    message: 'Tổ chức thành công chung kết cuộc thi Code Challenge 2019, sau vòng loại đã tổ chức ngày 11.04.2019',
    messageEn: 'Successfully held the final of Code Challenge 2019, after the qualifying round was held on April 11, 2019'
  },
  {
    date: '31.03.2019',
    message: 'Cán mốc 1.5 triệu pageview/tháng',
    messageEn: 'Reaching 1.5 million pageviews/month'
  },
  {
    date: '23.05.2019',
    message: `Viblo chính thức ra mắt dịch vụ mới: ${links.cv}!`,
    messageEn: `Viblo officially launched a new service: ${links.cv}!`
  },
  {
    date: '03.10.2019',
    message: `Viblo Platform: chính thức ra mắt ${links.ctf}!`,
    messageEn: `Viblo Platform: officially launched ${links.ctf}!`
  },
  {
    date: '04.2020',
    message: `Diễn ra Viblo Code Contest và Viblo CTF Contest mừng kỷ niệm ${links.birthday}`,
    messageEn: `Viblo Code Contest and Viblo CTF Contest took place to celebrate ${links.birthday}`
  },
  {
    date: '01-31.05.2020',
    message: `Diễn ra sự kiện ${links.mayfest} - Lễ hội chia sẻ kiến thức về công nghệ thông tin`,
    messageEn: `Event ${links.mayfest} - Information technology knowledge sharing festival`
  }
]
