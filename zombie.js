AFRAME.registerComponent('zombie-vest', {
    init: function () {
        var posX = -50;
        var posY = -3;
        var posZ = -150;

        for(var i = 1; i <= 3; i++) {
            var id = 'zomb${i}';
            var position = {x: posX,y: posY,z: posZ};
            posX += 50;
            this.zombieSpawn(id, position);
        }
    },

    zombieSpawn: function (id, position) {
       var environEl = document.querySelector('a-scene');
       var zombEl = document.createElement('a-entity');
       zombEl.setAttribute('position',position);
       zombEl.setAttribute('gltf-model','#ZomDon');
       zombEl.setAttribute('scale','10 10 10');
       zombEl.setAttribute('animation-mixer',{ clip: 'Walk'});
       zombEl.setAttribute('id', id)
       zombEl.setAttribute('animation',{property: 'position',to: '-10 0 1000000', dur: '1500', easing: 'linear', loop: 'true'});
       environEl.appendChild(zombEl);
    }
})