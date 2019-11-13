import React from 'react';
import test from 'tape';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {FeatureActionPanel} from 'components/editor/feature-action-panel';

test('FeatureActionPanel -> display layers', t => {
  const layers = [
    {
      config: {
        label: 'layer 1',
        dataId: 'puppy'
      }
    },
    {
      config: {
        label: 'layer 2',
        dataId: 'puppy'
      }
    }
  ];

  const datasets = {
    puppy: {
      color: [123,123,123]
    }
  };

  const onToggleLayer = sinon.spy();
  const onDeleteFeature = sinon.spy();

  const $ = shallow(
    <FeatureActionPanel
      className="action-item-test"
      layers={layers}
      datasets={datasets}
      onToggleLayer={onToggleLayer}
      onDeleteFeature={onDeleteFeature}
    />
  );

  t.equal(
    $.find('.layer-panel-item').length,
    2,
    'We should display only 2 action panel items'
  );

  t.end();

});
