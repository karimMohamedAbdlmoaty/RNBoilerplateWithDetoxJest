import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import RepoItem, { styles } from '../RepoItem';
import { repos } from '../../../config/jest/mockData';
import renderer from 'react-test-renderer';

const repo = repos[0];

it('test 1', () => {
  const wrapper = shallow(
    <RepoItem 
      repo={repos} 
      selectRepo={jest.fn}
    />
  );
  
  const { description, id, name, stargazers_count } = repo;
  expect(wrapper.contains(
    <TouchableHighlight
      onPress={() => {}}
      underlayColor='#E0F2F1'
    >
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
      </View>
    </TouchableHighlight>
  )).toBe(true);
});


it('test 2', () => {
  const wrapper = shallow(
    <RepoItem repo={repos} />
  );
  
  const { description, name, stargazers_count } = repo;
  expect(wrapper.contains(
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
    </View>
  )).toBe(true);
});



it('renders a selected RepoItem using Enzyme 1', () => {
  const wrapper = shallow(
    <RepoItem
      repo={repo}
      selectRepo={jest.fn}
      isSelected
    />
  );
  
  const { description, name, stargazers_count } = repo;
  expect(wrapper.contains(
    <View style={[styles.item, styles.selected]}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
    </View>
  )).toBe(true);
});

it('renders a RepoItem using Enzyme 2', () => {
  const wrapper = shallow(
    <RepoItem
      repo={repo}
      selectRepo={jest.fn}
    />
  );
  
  expect(wrapper.find({style: styles.item}).length).toBe(1);
});

it('renders a selected RepoItem using Enzyme 2', () => {
  const wrapper = shallow(
    <RepoItem
      isSelected
      repo={repo}
      selectRepo={jest.fn}
    />
  );
  
  expect(wrapper.find({style: [styles.item, styles.selected]}).length).toBe(1);
});

it('test 1', () => {
  const wrapper = shallow(
    <RepoItem 
      repo={repos} 
      selectRepo={jest.fn}
    />
  );
  
  const { description, id, name, stargazers_count } = repo;
  expect(wrapper.contains(
    <View style={[styles.item, styles.selected]}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.stars}>{`${stargazers_count} stars`}</Text>
      <Text>{description}</Text>
    </View>
  )).toBe(true);
});

it('test 2', () => {
  const wrapper = shallow(
    <RepoItem repo={repos} />
  );
  
  const { description, name, stargazers_count } = repo;

  expect(wrapper.contains(<Text>{repo.description}</Text>)).toBe(false);
});

it('test 2', () => {
  const wrapper = shallow(
    <RepoItem repo={repos} />
  );
  
  const { description, name, stargazers_count } = repo;

  expect(wrapper.contains(<Text>{repo.description}</Text>)).toBe(true);
});

it('renders a RepoItem using Snapshots', () => {
  expect(renderer.create(
    <RepoItem
      repo={repos[0]}
      selectRepo={jest.fn}
    />
  )).toMatchSnapshot();
});

it('renders a selected RepoItem using Snapshots', () => {
  expect(renderer.create(
    <RepoItem
      isSelected
      repo={repos[0]}
      selectRepo={jest.fn}
    />
  )).toMatchSnapshot();
});
