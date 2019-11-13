import React from 'react';
import test from 'tape';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import {
  ExportImageFactory,
  ExportDataFactory,
  ExportMapFactory,
  SaveMapFactory,
  SaveExportDropdownFactory
} from 'components/side-panel/panel-header';

test('SaveExportDropdown', t => {

  const ExportImage = ExportImageFactory();
  const ExportData = ExportDataFactory();
  const ExportMap = ExportMapFactory();
  const SaveMap = SaveMapFactory();

  const SaveExportDropdown = SaveExportDropdownFactory(
    ExportImage,
    ExportData,
    ExportMap,
    SaveMap
  );

  const onExportImage = sinon.spy();
  const onExportData = sinon.spy();
  const onExportConfig = sinon.spy();
  const onExportMap = sinon.spy();
  const onSaveMap = sinon.spy();
  const onClose = sinon.spy();

  const $ = shallow(
    <SaveExportDropdown
      onExportImage={onExportImage}
      onExportData={onExportData}
      onExportConfig={onExportConfig}
      onExportMap={onExportMap}
      onSaveMap={onSaveMap}
      show={true}
      onClose={onClose}
    />
  );

  t.equal(
    $.find('ExportImage').length,
    1,
    'We should display 1 ExportImage'
  );

  t.equal(
    $.find('ExportData').length,
    1,
    'We should display 1 ExportData'
  );

  t.equal(
    $.find('ExportMap').length,
    1,
    'We should display 1 ExportMap'
  );

  t.equal(
    $.find('SaveMap').length,
    1,
    'We should display 1 SaveMap'
  );

  $.find('ExportImage').simulate('click');
  t.equal(
    onExportImage.called,
    true,
    'Should have called export image callback'
  );

  $.find('ExportData').simulate('click');
  t.equal(
    onExportData.called,
    true,
    'Should have called export data callback'
  );

  $.find('ExportMap').simulate('click');
  t.equal(
    onExportMap.called,
    true,
    'Should have called export map callback'
  );

  $.find('SaveMap').simulate('click');
  t.equal(
    onSaveMap.called,
    true,
    'Should have called save map callback'
  );

  t.end();
});

