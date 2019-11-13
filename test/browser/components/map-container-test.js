import React from 'react';
import {mount as render} from 'enzyme';
import sinon from 'sinon';
import test from 'tape';
import MapContainerFactory from 'components/map-container';

test('MapContainerFactory - display all options', t => {
  const MapPopover = () => <div className="map-popover" />;
  const MapControl = () => <div className="map-control" />;
  const MapContainer = MapContainerFactory(MapPopover, MapControl);

  const updateMap = sinon.spy();
  const onMapStyleLoaded = sinon.spy();
  const onLayerClick = sinon.spy();

  const $ = render(
    <MapContainer
      mapState={{}}
      mapStyle={{
        bottomMapStyle: {layers: [], name: 'foo'},
        visibleLayerGroups: {}
      }}
      mapStateActions={{
        updateMap
      }}
      mapLayers={{}}
      layers={[]}
      datasets={{}}
      uiState={{
        mapControls: {
          splitMap: {show: true},
          visibleLayers: {show: true},
          toggle3d: {show: true},
          mapLegend: {show: true},
          mapDraw: {show: true}
        },
        editor: {}
      }}
      uiStateActions={{}}
      visStateActions={{
        onLayerClick
      }}
      interactionConfig={{
        tooltip: {
          enabled: true
        },
        coordinate: {
          enabled: true
        }
      }}
      layerBlending=""
      layerOrder={[]}
      layerData={[]}
      pinned={{
        coordinate: [0, 0]
      }}
      mapboxApiAccessToken=""
      editor={{
        features:[]
      }}
      onMapStyleLoaded={onMapStyleLoaded}
      mousePos={{
        mousePosition: [0, 0],
        coordinate: [0, 0],
        pinned: null
      }}
    />
  );

  t.equal(
    $.find('MapControl').length,
    1,
    'Should display 1 MapControl'
  );

  t.equal(
    $.find('InteractiveMap').length,
    1,
    'Should display 1 InteractiveMap'
  );

  // Draw
  t.equal(
    $.find('StaticMap').length,
    1,
    'Should display 1 DeckGl'
  );

  const instance = $.instance();

  instance._onMapboxStyleUpdate();

  t.equal(
    onMapStyleLoaded.called,
    true,
    'Should be calling onMapStyleLoaded'
  );

  instance._onCloseMapPopover();
  t.equal(
    onLayerClick.called,
    true,
    'Should be calling onLayerClick'
  );

  t.end();
});
