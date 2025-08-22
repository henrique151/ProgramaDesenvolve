import React from "react";
import { ProfileCard } from "./ProfileCard";


type Profile = {
    name: string;
    title: string;
    imageUrl: string;
    description: React.ReactNode;
}

type ProfileListProps = {
    profiles: Profile[];
}


export const ProfileList: React.FC<ProfileListProps> = ({profiles}) => {
    return (
        <div>
            <h2>Nosso time</h2>
            <div>
                {profiles.map((profile, index)=> (
                    <ProfileCard 
                        key={index}
                        name={profile.name}
                        title={profile.title}
                        imageUrl={profile.imageUrl}
                    >
                         {profile.description}
                    </ProfileCard>
                ))}
            </div>
        </div>
    )
}