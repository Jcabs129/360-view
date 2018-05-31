  window.addEventListener('load', onVrViewLoad);

    function onVrViewLoad() {
      // Selector '#vrview' finds element with id 'vrview'.
      var vrView = new VRView.Player('#vrview', {
        video: '/url/to/video.mp4',
        is_stereo: true
    });
    }
/*
// Selector '#vrview' finds element with id 'vrview'.
    var vrView = new VRView.Player('#vrview', {
    video: '/url/to/video.mp4',
    is_stereo: true
    });

    VRView.on('click', function(event) {
    if (event.id == myHotspotId) {
      // Handle hotspot click.
    }
    });

    vrView.setContentInfo({
    image: '/url/to/amazing-4096.jpg',
    preview:'/url/to/amazing-512.jpg',
    is_stereo: true
    });
*/
