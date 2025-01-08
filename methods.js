
  const MY_NAME = 'Torben Peters'; // Bold this name
  const methods = [

      
      {
        side: 'left',
        videoSrc: 'assets/videos/rollingdepth.mp4',
        title: 'Video Depth without Video Models',
        titleLink: 'https://example.com',
        authors: [
          { name: 'Bingxin Ke' }, { name: 'Dominik Narnhofer' }, { name: 'Shengyu Huang' }, { name: 'Lei Ke' }, { name: 'Torben Peters' }, { name: 'Katerina Fragkiadaki' }, { name: 'Anton Obukhov' }, { name: 'Konrad Schindler' }
        ],
        publishedInfo: 'Preprint, under review'
      },
      {
        side: 'right',
        videoSrc: 'assets/videos/HighResTrailer.mp4',
        title: 'TetraDiffusion: Tetrahedral Diffusion Models for 3D Shape Generation',
        titleLink: 'https://tetradiffusion.github.io/',
        authors: [
          { name: 'Nikolai Kalischek',sharedAuthorship:true }, { name: 'Torben Peters',sharedAuthorship:true }, { name: 'Jan D Wegner' }, { name: 'Konrad Schindler' }
        ],
        publishedInfo: 'European Conference on Computer Vision (ECCV) 2024'
      },
      
      {
        side: 'left',
        imageSrc: 'assets/images/agbd.png',
        title: 'AGBD: A Global-scale Biomass Dataset',
        titleLink: 'https://huggingface.co/datasets/prs-eth/AGBD',
        authors: [
          { name: 'Ghjulia Sialelli' }, { name: 'Torben Peters' }, { name: 'Jan D Wegner' }, { name: 'Konrad Schindler' }
        ],
        publishedInfo: 'Preprint, under review'
      },
      
      {
        side: 'right',
        imageSrc: 'assets/images/Chernihiv.png',
        title: 'An Open-Source Tool for Mapping War Destruction at Scale in Ukraine using Sentinel-1 Time Series',
        titleLink: 'https://example.com',
        authors: [
          { name: 'Olivier Dietrich' }, { name: 'Torben Peters' }, { name: 'Vivien Sainte Fare Garnot' }, { name: 'Valerie Sticher' }, { name: 'Thao Ton-That Whelan' }, { name: 'Konrad Schindler' }, { name: 'Jan Dirk Wegner' }
        ],
        publishedInfo: 'Preprint, under review '
      },
      
      {
        side: 'left',
        imageSrc: 'assets/images/forestinventory.jpg',
        title: 'Automated forest inventory: Analysis of high-density airborne LiDAR point clouds with 3D deep learning',
        titleLink: 'https://example.com',
        authors: [
          { name: 'Binbin Xiang' }, { name: 'Maciej Wielgosz' }, { name: 'Theodora Kontogianni' }, { name: 'Torben Peters' }, { name: 'Stefano Puliti' }, { name: 'Rasmus Astrup' }, { name: 'Konrad Schindler' }
        ],
        publishedInfo: 'Journal Remote Sensing of Environment, 2024'
      },
      
      
      {
        side: 'right',
        imageSrc: 'assets/images/review.jpg',
        title: 'A review of panoptic segmentation for mobile mapping point clouds',
        titleLink: 'https://example.com',
        authors: [
          { name: 'Binbin Xiang' }, { name: 'Yuanwen Yue' }, { name: 'Torben Peters' }, { name: 'Konrad Schindler' }
        ],
        publishedInfo: 'ISPRS Journal of Photogrammetry and Remote Sensing, 2023'
      },
      
      {
        side: 'left',
        imageSrc: 'assets/images/MVTeaser.png',
        title: 'Semantic segmentation of mobile mapping point clouds via multi-view label transfer',
        titleLink: 'https://example.com',
        authors: [
          { name: 'Torben Peters' }, { name: 'Claus Brenner' }, { name: 'Konrad Schindler' }
        ],
        publishedInfo: 'ISPRS Journal of Photogrammetry and Remote Sensing, 2023' 
      },
      
      {
        side: 'right',
        imageSrc: 'assets/images/instanceseg.png',
        title: 'Towards accurate instance segmentation in large-scale LiDAR point clouds',
        titleLink: 'https://github.com/prs-eth/PanopticSegForLargeScalePointCloud',
        authors: [
          { name: 'Binbin Xiang' }, { name: 'Torben Peters' }, { name: 'Theodora Kontogianni' }, { name: 'Frawa Vetterli' }, { name: 'Stefano Puliti' }, { name: 'Rasmus Astrup' }, { name: 'Konrad Schindler' }
        ],
        publishedInfo: 'Conference Paper, ISPRS Annals of the Photogrammetry, 2023'
      },
      
      {
        side: 'left',
        imageSrc: 'assets/images/biasbed.png',
        title: 'Biasbed-rigorous texture bias evaluation',
        titleLink: 'https://arxiv.org/abs/2211.13190',
        authors: [
          { name: 'Nikolai Kalischek' }, { name: 'Rodrigo Caye Daudt' }, { name: 'Torben Peters' }, { name: 'Reinhard Furrer' }, { name: 'Jan D Wegner' }, { name: 'Konrad Schindler' }
        ],
        publishedInfo: 'Conference on Computer Vision and Pattern Recognition (CVPR) 2023'
      },
      
      
      {
        side: 'right',
        imageSrc: 'assets/images/shapecompletion.png',
        title: 'Self-Supervised Adversarial Shape Completion',
        titleLink: 'https://isprs-annals.copernicus.org/articles/V-2-2022/143/2022/isprs-annals-V-2-2022-143-2022.pdf',
        authors: [
          { name: 'Torben Peters' }, { name: 'Konrad Schindler' }, { name: 'Claus Brenner' }
        ],
        publishedInfo: 'Conference Paper, ISPRS Annals of the Photogrammetry, 2022'
      },
      {
        side: 'left',
        videoSrc: 'assets/videos/cgan.mp4',
        title: 'Conditional adversarial networks for multimodal photo-realistic point cloud rendering',
        titleLink: 'https://link.springer.com/article/10.1007/s41064-020-00114-z',
        authors: [
          { name: 'Torben Peters' }, { name: 'Claus Brenner' }
        ],
        publishedInfo: 'PFG–Journal of Photogrammetry, Remote Sensing and Geoinformation Science, 2020'
      },
      {
        side: 'right',
        videoSrc: 'assets/videos/robot.mp4',
        title: 'Deep Reinforcment Learning - a robot learns to walk ',
        titleLink: 'https://github.com/PeterTor/DDPG-Gait',
        authors: [
          { name: 'Torben Peters' }
        ],
        publishedInfo: 'Victor Rizkallah Award for Outstanding Master Thesis'
      }
    

  ];
//   // Your methods array (sample shown above)
//   const methods = [
//     {
//       side: 'left',
//       videoSrc: 'assets/videos/rollingdepth.mp4',
//       title: '🛹 RollingDepth Video Depth without Video Models',
//       titleLink: 'https://rollingdepth.github.io/',
//       authors: [
//         {name: 'Bingxin Ke'},
//         {name: 'Dominik Narnhofer'},
//         {name: 'Shengyu Huang'},
//         {name: 'Lei Ke'},
//         {name: 'Torben Peters'},
//         {name: 'Katerina Fragkiadaki'},
//         {name: 'Anton Obukhov'},
//         {name: 'Konrad Schindler'},
//       ],
//       publishedInfo: 'Preprint, under review'
//     },
//     {
//       side: 'right',
//       videoSrc: 'assets/videos/HighResTrailer.mp4',
//       title: 'TetraDiffusion: Tetrahedral Diffusion Models for 3D Shape Generation',
//       titleLink: 'https://tetradiffusion.github.io/',
//       authors: [
//         {
//             name: 'Nikolai Kalischek',
          
//             sharedAuthorship: true
//           },
//         {
//           name: 'Torben Peters',
//           sharedAuthorship: true
//         },
//         {
//             name: 'Jan Dirk Wegner',
       
//           },
//           {
//             name: 'Konrad Schindler',

//           }
//       ],
//       publishedInfo: 'European Conference on Computer Vision (ECCV) 2024 '
//     },
//     {
//         side: 'left',
//         imageSrc: 'assets/images/agbd.png',
//         title: 'AGBD: A Global-scale Biomass Dataset',
//         titleLink: 'https://github.com/ghjuliasialelli/AGBD',
//         authors: [
//           {
//               name: 'Ghjulia Sialelli',
//             },
//           {
//             name: 'Torben Peters'
//           },
//           {name: 'Jan Dirk Wegner'},
//           {name: 'Konrad Schindler', }
//         ],
//         publishedInfo: 'Preprint, under review'
//       },
//  {
//       side: 'right',
//       imageSrc: 'assets/images/Chernihiv.png',
//       title: 'An Open-Source Tool for Mapping War Destruction at Scale in Ukraine using Sentinel-1 Time Series',
//       titleLink: 'https://tetradiffusion.github.io/',
//       authors: [
//         {name: 'Olivier Dietrich'},
//         {name: 'Torben Peters'},
//         {name: 'Vivien Sainte Fare Garnot'},
//         {name: 'Valerie Sticher'},
//         {name: 'Thao Ton-That Whelan'},
//         {name: 'Konrad Schindler'},
//         {name: 'Jan Dirk Wegner'},
//       ],
//       publishedInfo: 'Preprint, under review'
//     },

//   ];




  function createMethodHTML(method) {
    // Track if at least one author has sharedAuthorship
    let foundSharedAuth = false;
  
    // Build the author list
    const authorsHTML = method.authors
      .map(author => {
        let displayName = author.name;
  
        // Make MY_NAME bold (case-insensitive)
        if (displayName.toLowerCase() === MY_NAME.toLowerCase()) {
          displayName = `<strong>${displayName}</strong>`;
        }
  
        // Add a star if sharedAuthorship: true
        if (author.sharedAuthorship) {
          foundSharedAuth = true;
          displayName += '*';
        }
  
        // Link to Google Scholar if available
        if (author.scholarLink) {
          return `<a href="${author.scholarLink}" target="_blank">${displayName}</a>`;
        } else {
          return displayName;
        }
      })
      .join(', ');
  
    // If any author has sharedAuthorship, show this line below the authors
    const sharedAuthLine = foundSharedAuth
      ? `<p><em>* indicates shared first authorship</em></p>`
      : '';
  
    // Media column (video or image)
    let mediaColumn = '';
  
    if (method.videoSrc) {
      mediaColumn = `
        <div class="method-media" style="flex: 1; min-width: 300px; height: 300px; display: flex; align-items: center; justify-content: center;">
          <video width="300" height="300" style="object-fit: contain;" autoplay muted loop playsinline controls>
            <source src="${method.videoSrc}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    } else if (method.imageSrc) {
      mediaColumn = `
        <div class="method-media" style="flex: 1; min-width: 300px; height: 300px; display: flex; align-items: center; justify-content: center;">
          <img src="${method.imageSrc}" alt="${method.title}" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
      `;
    }
  
    // Text column
    const textColumn = `
      <div class="method-description" style="flex: 2; height: 300px; display: flex; flex-direction: column; justify-content: center;">
        <h2 style="margin-top: 0;">
          <a href="${method.titleLink}" target="_blank" 
             style="text-decoration: none; color: black; font-weight: bold;">
             ${method.title}
          </a>
        </h2>
        <p>${authorsHTML}</p>
        ${sharedAuthLine}
        <p><em>${method.publishedInfo}</em></p>
      </div>
    `;
  
    // If side is 'left' => media first, text second
    if (method.side === 'left') {
      return `
        <div class="method-row"
             style="display: flex; align-items: flex-start; justify-content: space-between; gap: 2rem; margin-bottom: 2rem; height: 300px;">
          ${mediaColumn}
          ${textColumn}
        </div>
      `;
    } else {
      // side === 'right' => text first, media second
      return `
        <div class="method-row"
             style="display: flex; align-items: flex-start; justify-content: space-between; gap: 2rem; margin-bottom: 2rem; height: 300px;">
          ${textColumn}
          ${mediaColumn}
        </div>
      `;
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', function listener() {
    console.log('DOMContentLoaded fired');
  
    // Ensure listener is removed to prevent duplicate execution
    document.removeEventListener('DOMContentLoaded', listener);
  
    const container = document.getElementById('methods-container');
    container.innerHTML = ''; // Clear any existing content
  
    methods.forEach(method => {
      container.insertAdjacentHTML('beforeend', createMethodHTML(method));
    });
  });
  