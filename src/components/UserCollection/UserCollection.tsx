import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { loadUserCollectionThunk } from "../../redux/thunks/recordsThunks";
import { IUserCollection } from "../../types/types";
import Button from "../Button/Button";
import UserCollectionStyled from "./UserCollectionStyled";

const UserCollection = ({
  user: { id, username, location, image, imageBackup, genre },
}: {
  user: IUserCollection;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateAndLoadRecords = async () => {
    await dispatch(loadUserCollectionThunk(id));
    navigate(`/users/${id}`);
  };
  return (
    <UserCollectionStyled className="card">
      <img
        src={image ? imageBackup : "/images/no-photo-available.png"}
        alt={`${username} avatar`}
        className="card__img"
      />
      <div className="card-body">
        <h3 className="card-title">{username} Collection</h3>
        <h4 className="location">Location: {location}</h4>
        <h4 className="genre">Genre: {genre}</h4>
      </div>
      <Button
        type="button"
        disabled={false}
        edit={false}
        add={false}
        className="button button--see-collection"
        text="See collection"
        action={navigateAndLoadRecords}
      />
    </UserCollectionStyled>
  );
};

export default UserCollection;
