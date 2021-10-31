import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardItem  from '../components/card';

const fakeGame = {
  "editors_choice": "Y",
  "genre": "Platformer",
  "platform": "PlayStation Vita",
  "title": "LittleBigPlanet PS Vita",
  "score": 9
};

describe('<CardItem/>', () => {
  it('Renders title and platform', () => {
    render(<CardItem game={fakeGame} />);

    const title = screen.getByTestId('card-title');
    expect(title).toHaveTextContent('LittleBigPlanet PS Vita');

    const platform = screen.getByTestId('card-platform');
    expect(platform).toHaveTextContent('PlayStation Vita');
  });

  it('renders the editors choice ribbon', async () => {
    render(<CardItem game={fakeGame} />);

    const ribbon = screen.getByTestId('card-ribbon');
    expect(ribbon).toHaveTextContent('Editors choice');
  });
});