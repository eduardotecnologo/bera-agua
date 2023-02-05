import { createContext, useState } from "react";
import { IUser } from "../interfaces/UserInterfaces";

interface IUserContext{
    user?: IUser;
    goal: number;
    setGoal: React.Dispatch<React.SetStateAction<number>>;
}

const GOAL = 2000;
const USER = {
    name: 'Eduardo Developer',
    photo: 'https://avatars.githubusercontent.com/u/8800014?s=96&v=4'
}

export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    setGoal: () => {},
    user: USER
});

interface UserProviderProps{
    children: React.ReactNode;
}

export const UserProvider: 
    React.FC<UserProviderProps> = ({ children }) => {
        const [user, setUser] = useState<IUser>(USER);
        const [goal, setGoal] = useState<number>(GOAL);
        return (
            <UserContext.Provider value={{ goal, user, setGoal}}>
                {children}
            </UserContext.Provider>
        )
    }