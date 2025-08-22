import React from "react";

type ProfileCardProps = {
    name: string;
    title: string;
    imageUrl: string;
    children?: React.ReactNode;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    title,
    imageUrl,
    children
}) => {
    return (
        <div>
            <div>
                <img src={imageUrl} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
                <div>
                    {children}
                </div>
                <p>Membro desde 2025</p>
                <div>
                    <div>
                        <span>X</span>
                        <span>Y</span>
                        <span>Z</span>
                    </div>
                    <button>Ver Perfil</button>
                </div>
            </div>
        </div>
    )
}