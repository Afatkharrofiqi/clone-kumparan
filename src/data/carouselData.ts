interface CardNews {
  imageUrl: string,
  owner: string,
  totalLikes: number,
  totalComments: number,
  times: Date,
}

interface CarouselItem {
  bigContent: CardNews,
  smallContent: CardNews[]
}

export const carouselData: CarouselItem[] = [
  {
    bigContent: {
      imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gdnhz1b4bb8wbrc2337105w1.jpg',
      owner: 'kumparanNEWS',
      totalLikes: 1,
      totalComments: 1,
      times: new Date(),
    },
    smallContent: [
      {
        imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gdnhz1b4bb8wbrc2337105w1.jpg',
        owner: 'kumparanNEWS',
        totalLikes: 1,
        totalComments: 1,
        times: new Date(),
      },
      {
        imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gdnhz1b4bb8wbrc2337105w1.jpg',
        owner: 'kumparanNEWS',
        totalLikes: 1,
        totalComments: 1,
        times: new Date(),
      }
    ]
  },
  {
    bigContent: {
      imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gdnhz1b4bb8wbrc2337105w1.jpg',
      owner: 'kumparanNEWS',
      totalLikes: 1,
      totalComments: 1,
      times: new Date(),
    },
    smallContent: [
      {
        imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gdnhz1b4bb8wbrc2337105w1.jpg',
        owner: 'kumparanNEWS',
        totalLikes: 1,
        totalComments: 1,
        times: new Date(),
      },
      {
        imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01gdnhz1b4bb8wbrc2337105w1.jpg',
        owner: 'kumparanNEWS',
        totalLikes: 1,
        totalComments: 1,
        times: new Date(),
      }
    ]
  },
]