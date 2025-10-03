import React, { useState } from "react";
import "../styles/TrainingVideos1.css";
import ViewPoliciesIcon from "../assets/svg/viewpolicies.svg";
import SecurityPledge from "../assets/svg/security_pledge.svg";
import SecurityPledgeInner from "../assets/svg/security-pledge-inner.svg";
import PledgeBox from "../assets/svg/pledge-box.svg";
import SubmitIcon from "../assets/svg/submit.svg";
import ApproveButton from "../assets/svg/approve-button.svg";
import RejectButton from "../assets/svg/reject-button.svg";
import CheckedBoxBlue from "../assets/svg/checked-box-blue.svg";
import TransferWorkflow from "../assets/svg/transfer-workflow.svg";
import Splitter from "../assets/svg/splitter.svg";
import Handle from "../assets/svg/handle.svg";

const TrainingVideos = () => {
  const [isComplianceChecked, setIsComplianceChecked] = useState(false);
  const [comments, setComments] = useState("");
  const [showManagerUndertaking, setShowManagerUndertaking] = useState(false);
  const [isManagerChecked, setIsManagerChecked] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const handleComplianceCheck = () => {
    setIsComplianceChecked(!isComplianceChecked);
  };

  const handleSubmitClick = () => {
    setShowManagerUndertaking(true);
  };

  const handleManagerCheck = () => {
    setIsManagerChecked(prev => !prev);
  };

  const handleApproveClick = () => {
    if (isManagerChecked) {
      setIsApproved(true);
    }
  };

  return (
    <div className="training-videos-container">
      {/* Main Blue Rectangle Container */}
      <div className="main-rectangle">
        {/* Heading above Security Pledge */}
        <div className="security-pledge-title">
          Confidentiality Undertaking  FOR CARRYING COMPANY’S ASSET OUTSIDE OFFICE
        </div>

        {/* Training Progress Bar replaced with security pledge SVGs */}
        <div className="training-progress-bar">
          <div className="security-pledge-block">
            <div className="security-pledge-wrapper">
              <img className="outer-pledge" src={SecurityPledge} alt="Security Pledge" />
              <img className="security-pledge-inner" src={SecurityPledgeInner} alt="Security Pledge Inner" />
            </div>
            <div className="pledge-box-frame">
              <img className="pledge-box" src={PledgeBox} alt="Pledge Box" />
              {/* Compliance Checkbox */}
              <div className="compliance-checkbox" style={{ marginBottom: '52px' }}>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={isComplianceChecked}
                    onChange={handleComplianceCheck}
                    className={`checkbox-input ${showManagerUndertaking ? 'second-state-onwards' : ''}`}
                  />
                  <span className="checkbox-text">
                    I hereby acknowledge that I have knowingly and voluntarily, without duress or reservation of any kind, signed this Undertaking.
                  </span>
                </label>
              </div>
              <div className="pledge-box-splitter">
                <img src={Splitter} alt="Splitter" />
                <img className="pledge-box-handle" src={Handle} alt="Handle" />
              </div>
              <div className="pledge-box-text">
                In consideration of my employment with Samsung R&D Institute India - Bangalore Private Limited ("Company") and having allowed to carry Company's asset outside office ("remote working"), I undertake to the Company as follows :-
              </div>
              <div className="pledge-box-body">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <ol>
                  <li>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Text section removed as requested */}
      </div>

      {/* Attached Footer Rectangle below main rectangle */}
      <div className="main-rectangle-footer">
        {!isApproved ? (
          <>
            {/* Manager Undertaking (appears after submit clicked) */}
            {showManagerUndertaking && (
              <div className="manager-undertaking">
                <div className="manager-title">Undertaking by the Manager</div>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={isManagerChecked}
                    onChange={handleManagerCheck}
                    className="checkbox-input manager-checkbox"
                    style={isManagerChecked ? { backgroundImage: `url(${CheckedBoxBlue})` } : {}}
                  />
                  <span className="checkbox-text">
                  I as a reporting manager of the Employee is authorizing the Employee to carry laptop/Sample / Monitor or other assets etc outside office premises, since employee is working on SVPN / VDI as part remote working facility. Employee assumes full responsibility of the Company Asset as declared above.
                  </span>
                </label>
              </div>
            )}
            {/* Comments Section */}
            <div className="comments-section">
              <div className="comments-label">Comment (Max 500 Chars)</div>
              <textarea
                className="comments-textbox"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="xxx-xxx-xx-xxx-x"
                maxLength={500}
              />
            </div>

            {/* Submit Section */}
            <div className="submit-section">
              {!showManagerUndertaking ? (
                <img
                  src={SubmitIcon}
                  alt="Submit"
                  className="submit-icon"
                  onClick={isComplianceChecked ? handleSubmitClick : undefined}
                  style={{ cursor: isComplianceChecked ? 'pointer' : 'not-allowed', opacity: isComplianceChecked ? 1 : 0.5 }}
                />
              ) : (
                <div className="approval-actions">
                  <img src={RejectButton} alt="Reject" className="reject-button" />
                  <img 
                    src={ApproveButton} 
                    alt="Approve" 
                    className="approve-button"
                    onClick={handleApproveClick}
                    style={{ cursor: isManagerChecked ? 'pointer' : 'not-allowed', opacity: isManagerChecked ? 1 : 0.5 }}
                  />
                </div>
              )}
            </div>

            {/* Transfer Workflow Section */}
            <div className="transfer-workflow-section">
              <img src={TransferWorkflow} alt="Transfer Workflow" className="transfer-workflow-img" />
            </div>

            {/* View Policies Section */}
            <div className="footer-bottom">
              <div className="view-policies-link">
                <img
                  src={ViewPoliciesIcon}
                  alt="View Policies"
                />
                <span></span>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Final State - Only Manager Undertaking and View Policies */}
            <div className="manager-undertaking final-state">
              <div className="manager-title">Undertaking by the Manager</div>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isManagerChecked}
                  onChange={handleManagerCheck}
                  className="checkbox-input manager-checkbox"
                />
                <span className="checkbox-text">
                I as a reporting manager of the Employee is authorizing the Employee to carry laptop/Sample / Monitor or other assets etc outside office premises, since employee is working on SVPN / VDI as part remote working facility. Employee assumes full responsibility of the Company Asset as declared above.
                </span>
              </label>
            </div>

            {/* View Policies Section */}
            <div className="footer-bottom final-state">
              <div className="view-policies-link">
                <img
                  src={ViewPoliciesIcon}
                  alt="View Policies"
                />
                <span></span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TrainingVideos;

