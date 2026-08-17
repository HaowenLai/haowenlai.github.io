// Home page content and news.
Object.assign(window.SITE_DATA, {
  home: {
    about: [
      `I am currently a Ph.D. student in the <a href="https://www.cis.upenn.edu/">CIS department</a> at the <a href="https://www.upenn.edu/">University of Pennsylvania</a>, advised by Prof. <a href="http://people.csail.mit.edu/mingmin/">Mingmin Zhao</a>. Before that, I received my M.S. from <a href="https://www.tsinghua.edu.cn/en/">Tsinghua University</a> in 2022 and my B.Eng. from <a href="https://en.tongji.edu.cn/index.htm">Tongji University</a> in 2019.`,
      `The pronunciation of my name is <span class="pronunciation">HOW-wuhn LYE  /'haʊwən laɪ/</span>. More background can be found on the Bio page and in my CV. If you are interested in collaboration, feel free to contact me by email.`,
      `📢📢📢 <strong>I am looking for a full-time industry position starting in 2027.</strong>`,
    ],
    research: [
      "My research focuses on building robust <strong>multimodal wireless sensing and perception systems</strong>.",
      "I am particularly interested in <strong>RF and radar perception</strong>, including <strong>foundation models for RF sensing</strong> that integrate wireless signals with vision, audio, wifi, and other sensing modalities.",
      "My work aims to understand <strong>geometry, semantics, materials, and human activities</strong> in challenging real-world environments, with applications in <strong>robotics, health monitoring, smart homes, and human-centered computing</strong>.",
      "More broadly, I am also interested in <strong>LLMs, SLAM, localization, 3D reconstruction, imaging, segmentation, and detection</strong>."
    ],
    featuredResearch: ["holoradar", "cartoradar", "panoradar"],
    mediaCoverage: [
      {
        href: "https://penntoday.upenn.edu/news/penn-engineering-robots-can-see-around-corners-using-radio-signals-and-ai",
        src: "images/media/penn_today.png",
        alt: "Penn Today",
        caption: "HoloRadar: Robots that see around corners",
      },
      {
        href: "https://www.bbc.com/news/articles/cm2l1y73mz1o",
        src: "images/media/bbc.png",
        alt: "BBC",
        caption: "PanoRadar: Robot vision through smoke and fog",
      },
      {
        href: "https://penntoday.upenn.edu/news/penn-engineering-giving-robots-superhuman-vision-using-radio-signals",
        src: "images/media/penn_today.png",
        alt: "Penn Today",
        caption: "PanoRadar: Superhuman vision using radio signals",
      },
      {
        href: "https://www.mittrchina.com/news/detail/14192",
        src: "images/media/mit_tech_review.svg",
        alt: "MIT Technology Review",
        caption: "PanoRadar: High-resolution 3D imaging",
      },
    ],
  },
  news: [
    {
      date: "May 2026",
      html: `Very excited to spend the summer at <strong>Google</strong> as a Research Intern. See you in Mountain View!`,
    },
    {
      date: "Apr. 2026",
      html: `Our paper <a href="https://dl.acm.org/doi/10.1145/3745756.3809230">SurfRadar</a> and <a href="https://dl.acm.org/doi/10.1145/3745756.3809241">AV-Twin</a> got accepted at MobiSys 2026.`,
    },
    {
      date: "Nov. 2025",
      html: `Our paper <a href="https://dl.acm.org/doi/10.1145/3680207.3723467">RF-Based 3D SLAM Rivaling Vision Approaches</a> won the <a href="https://www.sigmobile.org/mobicom/2025/awards.html">Best Artifact Award</a> at MobiCom 2025.`,
    },
    {
      date: "Sept. 2025",
      html: `Our paper <strong>Non-Line-of-Sight 3D Reconstruction with Radar</strong> was accepted to <a href="https://neurips.cc/Conferences/2025">NeurIPS 2025</a>.`,
    },
    {
      date: "May 2025",
      html: `I won <strong>second place</strong> in the <a href="https://src.acm.org/grand-finalists/2025">ACM SRC Grand Finals</a> (2/334 across 21 ACM conferences).`,
    },
    {
      date: "Feb. 2025",
      html: `Our paper <a href="https://dl.acm.org/doi/10.1145/3636534.3649369">Enabling Visual Recognition at Radio Frequency</a> was covered by <a href="https://www.bbc.com/news/articles/cm2l1y73mz1o">BBC</a>.`,
    },
    {
      date: "Nov. 2024",
      html: `I won <strong>first place</strong> in the <a href="https://www.sigmobile.org/mobicom/2024/src.html">ACM MobiCom 2024 Student Research Competition</a>.`,
    },
    {
      date: "Nov. 2024",
      html: `Our paper <a href="https://dl.acm.org/doi/10.1145/3636534.3649369">Enabling Visual Recognition at Radio Frequency</a> won the <a href="https://www.sigmobile.org/mobicom/2024/">Best Demo Award</a> at MobiCom 2024.`,
    },
    {
      date: "Jun. 2022",
      html: `I earned my M.S. degree from <a href="https://www.tsinghua.edu.cn/en/">Tsinghua University</a>, supervised by Prof. <a href="https://www.researchgate.net/profile/Yisheng-Zhong">Yisheng Zhong</a>.`,
    },
    {
      date: "Feb. 2022",
      html: `I became one of the organizers of the <a href="https://sites.google.com/andrew.cmu.edu/gpr-competition/">ICRA 2022 General Place Recognition Competition</a>.`,
    },
    {
      date: "May 2021",
      html: `I joined <a href="http://theairlab.org">the Air Lab</a> at <a href="https://www.cmu.edu/">Carnegie Mellon University</a> as a summer intern, supervised by Prof. <a href="https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/">Sebastian Scherer</a>.`,
    },
    {
      date: "Jul. 2020",
      html: `I completed an internship at <a href="https://www.novauto.com.cn">Beijing Novauto Technology Co., Ltd</a>.`,
    },
    {
      date: "Jun. 2019",
      html: "I earned my B.E. degree as an outstanding undergraduate.",
    },
    {
      date: "Jul. 2018",
      html: `I won <strong>first prize</strong> in the <a href="http://nuedc.sjtu.edu.cn/EN/show.aspx?info_lb=20&info_id=244&flag=20">Intel Cup ESDC</a>.`,
    },
  ],
});
