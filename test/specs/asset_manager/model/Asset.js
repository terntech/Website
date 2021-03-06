var Asset = require('asset_manager/model/Asset');

module.exports = {
  run: function(){

    describe('Asset', function() {
      it('Object exists', function() {
        expect(Asset).toExist();
      });

      it('Has default values', function() {
        var obj   = new Asset({});
        expect(obj.get('type')).toNotExist();
        expect(obj.get('src')).toNotExist();
        expect(obj.getExtension()).toNotExist();
        expect(obj.getFilename()).toNotExist();
      });

      it('Test getFilename', function() {
        var obj = new Asset({ type:'image', src: 'ch/eck/t.e.s.t'});
        expect(obj.getFilename()).toEqual('t.e.s.t');
        var obj = new Asset({ type:'image', src: 'ch/eck/1234abc'});
        expect(obj.getFilename()).toEqual('1234abc');
      });

      it('Test getExtension', function() {
        var obj   = new Asset({ type:'image', src: 'ch/eck/t.e.s.t'});
        expect(obj.getExtension()).toEqual('t');
        var obj   = new Asset({ type:'image', src: 'ch/eck/1234abc.'});
        expect(obj.getExtension()).toEqual('');
      });
    });
  }
}
