
interface Props {
    cartItemCount: number;
}

function Navbar({cartItemCount}:Props) {

    return (
        <div>
            Navbar: {cartItemCount}
        </div>
    )

}

export default Navbar;