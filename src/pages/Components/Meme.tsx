const Meme = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const img = [
        'https://cdn.statically.io/img/www.digitalmomblog.com/wp-content/uploads/2017/02/happy-valentines-day-meme-big-bang.jpeg?quality=100&f=auto',
        'https://i.postimg.cc/BbkFM5mj/Whats-App-Image-2024-02-13-at-10-26-45-AM.jpg',
        'https://i.postimg.cc/XY3cZbDm/Whats-App-Image-2024-02-13-at-10-26-32-AM.jpg',
        'https://i.postimg.cc/QN1Tcz53/Whats-App-Image-2024-02-13-at-10-26-17-AM.jpg',
        'https://i.postimg.cc/fLhws8bc/Whats-App-Image-2024-02-13-at-10-26-00-AM-1.jpg',
        'https://i.postimg.cc/gkvcSFkY/images-2.jpg',
        'https://i.postimg.cc/Kj84X099/Whats-App-Image-2024-02-13-at-10-20-33-AM.jpg',
        'https://i.postimg.cc/dVpC2cWJ/Whats-App-Image-2024-02-13-at-10-20-54-AM.jpg',
        'https://i.postimg.cc/jqwGcHdK/Whats-App-Image-2024-02-13-at-10-23-09-AM.jpg',
        'https://i.chzbgr.com/full/9732391168/h9642C101/person-single-on-valentines-day-someone-asks-if-love-is-air'
         ]
  return (
    <>
    <div>
        <img src= {img[randomNumber]} style={{height:'300px', width:'300px'}}/>
    </div>
    </>
  )
}

export default Meme