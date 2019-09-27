export interface IArtists {
  id: number;
  name: string;
  picUrl: null;
  alias: [];
  albumSize: number;
  picId: number;
  img1v1Url: string;
  img1v1: number;
  trans: null;
}

export interface ISearchItem {
  id: number;
  name: string;
  artists: IArtists[];
  album: {
    id: number;
    name: string;
    artist: {
      id: number;
      name: string;
      picUrl: null;
      alias: [];
      albumSize: number;
      picId: number;
      img1v1Url: string;
      img1v1: number;
      trans: null;
    };
    publishTime: number;
    size: number;
    copyrightId: number;
    status: number;
    picId: number;
    mark: number;
  };
  duration: number;
  copyrightId: number;
  status: number;
  alias: [];
  rtype: number;
  ftype: number;
  mvid: number;
  fee: number;
  rUrl: null;
  mark: number;
}
