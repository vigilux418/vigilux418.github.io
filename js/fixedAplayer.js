const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '所念皆星河',
        artist: '房东的猫',
        url: 'music/music0.flac',
        cover: 'images/music0_cover.jpg',
      }
    ]
});
