import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import test from 'tape';
import MapControlFactory from 'components/map/map-control';

test('MapControlFactory - display all options', t => {

  const MapControl = MapControlFactory();
  const onToggleSplitMap = sinon.spy();
  const onTogglePerspective = sinon.spy();
  const onToggleMapControl = sinon.spy();
  const onSetEditorMode = sinon.spy();

  const $ = shallow(
    <MapControl
      mapControls={{
        splitMap: {show: true},
        visibleLayers: {show: true},
        toggle3d: {show: true},
        mapLegend: {show: true},
        mapDraw: {show: true}
      }}
      datasets={{}}
      layers={[]}
      layersToRender={{}}
      dragRotate={true}
      mapIndex={0}
      onToggleSplitMap={onToggleSplitMap}
      onTogglePerspective={onTogglePerspective}
      onToggleMapControl={onToggleMapControl}
      onSetEditorMode={onSetEditorMode}
    />
  );

  t.equal(
    $.find('ActionPanel').length,
    4,
    'Should show 4 action panels'
  );

  t.end();
});
