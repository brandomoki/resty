import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react';
import Results from './index';

describe('Result Component', () => {
  it('should render data', () => {
    let data = {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    };
    render(<Results data={data} />);
    let Text = screen.getByTestId('results');
    expect(Text).toHaveTextContent('charmander');
  })
})