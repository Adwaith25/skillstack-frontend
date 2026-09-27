function CredentialCards(props){
    return(
        <div className="credential">
            <p>Title:{props.title}</p>
            <p>Issuer:{props.issuer}</p>
            <p>issue Date:{props.issueDate}</p>
            <p>Expiry Date:{props.expiryDate}</p>
            <p>Credential ID:{props.credentialId}</p>
        </div>
    );
}
export default CredentialCards;