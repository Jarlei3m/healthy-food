import { JoinMembershipContainer, JoinMembershipContent } from "./styles";

export function JoinMembership() {
  return (
    <JoinMembershipContainer>
      <JoinMembershipContent>
        <div>
          <h1>Join our membership <br /> to get special offer</h1>

          <form action="">
            <input type="text" placeholder='Enter your email address' />
            <button type='submit'>
              Join
            </button>
          </form>
        </div>

        <img src="images/bloco_final_image.svg" alt="Join our membership" />
      </JoinMembershipContent>
    </JoinMembershipContainer>
  )
}