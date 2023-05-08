const Placeholder = () => {
  return (
    <>
      <div className="placeholder">
        <div className="plus">
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <h1>No budget Added yet</h1>
      </div>
      <style jsx>{`
        .placeholder {
          width: 100%;
          height: 500px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 40px;
          border-radius: 30px;
        }

        h1{
            font-size: 45px;
        }

        .plus{
            width: 300px;
            height: 300px;
            border-radius: 100%;
            border: 2px solid #000;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 40px;
        }

        .line{
            width: 90%;
            height: 5px;
            background: #000;
        }

        .line:nth-child(1){
            transform: translateY(20px) rotate(90deg);
        }
        .line:nth-child(2){
            transform: translateY(-20px);
        }

        .placeholder:hover {
          border: 2px dashed black;
        }
      `}</style>
    </>
  );
};

export default Placeholder;
