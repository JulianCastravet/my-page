export interface TagInterface {
  name: string;
  color: string;
}

export interface ProjectInterface {
  id: string;
  name: string;
  description: string;
  tags: TagInterface[];
  image: string;
  demo: string;
  repo?: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}
