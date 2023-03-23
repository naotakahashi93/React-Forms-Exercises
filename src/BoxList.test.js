import React from 'react';
import { render, screen } from '@testing-library/react';
import BoxList from './BoxList';

//smoketest
test('renders BoxList', () => {
  render(<BoxList />);
});

